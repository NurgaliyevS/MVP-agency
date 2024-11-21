'use client'

import { useState, useEffect } from 'react'

function Pricing() {
  const [isBlackFriday, setIsBlackFriday] = useState(false)
  const originalPrice = 3000
  const discountedPrice = 1500

  const features = [
    "7 days delivery",
    "1 core feature",
    "1 round of revisions",
    "Basic hosting setup",
    "Deploy & setup domain",
  ]

  useEffect(() => {
    const now = new Date()
    const currentYear = now.getFullYear()
    const blackFridayStart = new Date(currentYear, 10, 21) // November 24th (0-indexed month)
    const monthEnd = new Date(currentYear, 11, 1) // December 1st (0-indexed month)

    setIsBlackFriday(now >= blackFridayStart && now < monthEnd)
  }, [])

  return (
    <section className="py-16 px-4" id="pricing">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Pricing
        </h2>
        <div className="bg-white rounded-xl overflow-hidden w-full lg:w-1/2 mx-auto shadow-lg border border-gray-200">
          {isBlackFriday && (
            <div className="bg-red-600 text-white p-4 text-center font-bold text-xl">
              🎉 Black Friday Sale: 50% OFF! 🎉
              <br />
              <span className="text-sm font-normal">Valid until November 30th</span>
            </div>
          )}
          <div className="p-6 pb-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-black">MVP</h3>
              <div className="flex items-center gap-2">
                <p className="text-4xl text-black font-bold">
                  ${isBlackFriday ? discountedPrice : originalPrice}
                </p>
                {isBlackFriday && (
                  <p className="text-2xl text-gray-500 line-through">
                    ${originalPrice}
                  </p>
                )}
              </div>
              {isBlackFriday && (
                <p className="text-green-600 font-semibold">You save ${originalPrice - discountedPrice}!</p>
              )}
              <span>Bring your own design</span>
            </div>
          </div>
          <ul className="p-6 pt-0 space-y-4 pb-3">
            {features.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="p-6 mx-auto pt-3">
            <a
              href={`https://buy.stripe.com/7sI9DX38eaucdnWdQQ${isBlackFriday ? '?prefilled_promo_code=FRIDAYSALE2024' : ''}`}
              className={`btn btn-primary rounded-lg btn-block ${isBlackFriday ? 'bg-red-600 hover:bg-red-700' : ''}`}
              role="button"
            >
              {isBlackFriday ? 'Claim Your 50% OFF Now!' : 'Buy Now'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

