import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1Tj25ePokckGKD0k5BIHo6HE',
    'seeker_premium': 'price_1Tj3VWPokckGKD0kmHDchtAu',
    'recruiter_growth': 'price_1TjHI0PokckGKD0kGlky8kYS',
    'recruiter_enterprise': 'price_1TjHIpPokckGKD0kVjYMQD4E'
}