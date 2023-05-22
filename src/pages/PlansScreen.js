import React, { useEffect, useState } from 'react'
import '../assets/style/PlansScreen.css'
import db from '../firebase.js'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import PropagateLoader from 'react-spinners/PropagateLoader'

import { loadStripe } from '@stripe/stripe-js'

function PlansScreen() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const user = useSelector(selectUser)
  const style = { position: "fixed", top: "37%", left: "50%", transform: "translate(-50%, -50%)" };

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products = {}
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data()
          const priceSnap = await productDoc.ref.collection('prices').get()
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            }
          })
        })
        setProducts(products)
      })
  }, [])

  const loadCheckout = async (priceId) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 15000)
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      })

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data()

      if (error) {
        alert(`An error occurred: ${error.message}`)
      }

      if (sessionId) {
        const stripe = await loadStripe(
          'pk_test_51N8hl3BOFl2zADHmNyarLcwXL5WeEdPLKPi6s88RWC90CEavuDaLRupwggwg1ATUCUzMZIMTZrNgBl8DgjTxzUf1008VXUd2El'
        )
        stripe.redirectToCheckout({ sessionId })
      }
    })
  }

  return (
    <div className="PlansScreen">
      <div style={style}>
      <PropagateLoader color={'#e50914'} loading={loading} size={30} />
      </div>

      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="plansScreen-plan">
            <div className="plansScreen-info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default PlansScreen
