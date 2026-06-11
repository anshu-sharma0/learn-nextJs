'use client'

import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const faq = [
    {
        id: 1,
        question: 'What is the capital of France?',
        answer: 'The capital of France is Paris.',
    },
    {
        id: 2,
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
        id: 3,
        question: 'What is Next.js?',
        answer: 'Next.js is a React framework for production applications.',
    },
    {
        id: 4,
        question: 'What is Tailwind CSS?',
        answer: 'Tailwind CSS is a utility-first CSS framework.',
    },
    {
        id: 5,
        question: 'What is TypeScript?',
        answer: 'TypeScript is a strongly typed superset of JavaScript.',
    },
]

export default function FAQPage() {
    const [openId, setOpenId] = useState<number | null>(null)

    const toggleFaq = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-center text-5xl font-bold text-slate-900 dark:text-white mb-12">
                    Frequently Asked Questions
                </h1>

                <div className="space-y-4">
                    {faq.map((item) => (
                        <div
                            key={item.id}
                            className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md transition-all"
                        >
                            <button
                                onClick={() => toggleFaq(item.id)}
                                className="flex w-full items-center justify-between px-6 py-3 text-left cursor-pointer"
                            >
                                <span className="text-lg font-semibold text-slate-800 dark:text-white">
                                    {item.question}
                                </span>

                                <ChevronDown
                                    className={`transition-transform duration-300 text-black dark:text-white  ${openId === item.id ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openId === item.id && (
                                <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-4">
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}