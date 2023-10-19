import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import HorizontalScroll from './horizontalScroll'
import BookCollection from './booksCollections'

const categoriesArray = [
  {
    name: 'Chemistry',
  },
  {
    name: 'Biology',
  },
  {
    name: 'Engineering',
  },
  {
    name: 'Film Studies',
  },
  {
    name: 'Design',
  },
  {
    name: 'Language Studies',
  },
  {
    name: 'Education',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Language Studies',
  },
  {
    name: 'Education',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
  {
    name: 'Business',
  },
]
const SCROLLER_VALUE = 100
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('chemistry')
  console.log({ selectedCategory })
  const swiperRef = useRef(null)
  console.log({ swiperRef })

  const scrollTo = (amount) => {
    const container = swiperRef.current
    console.log({ amount, container })
    container.scrollLeft += amount
  }

  return (
    <div className=" relative max-w-7xl bg-center bg-no-repeat w-full mx-auto">
      <div className="flex items-center">
        <div
          className="text-green-400  bg-green-200  hover:bg-green-400  cursor-pointer"
          onClick={() => scrollTo(-SCROLLER_VALUE)}
        >
          <ChevronLeft size={32} />
        </div>

        <div
          className="flex overflow-x-scroll scroll-smooth swiperContainer"
          ref={swiperRef}
        >
          {categoriesArray?.map((d) => (
            <div
              onClick={() => setSelectedCategory(d?.name)}
              className={`${
                selectedCategory == d?.name ? 'text-bold' : 'text-normal'
              } cursor-pointer  mx-2 flex flex-col items-center `}
            >
              <Image
                src="./chemistry.svg"
                height={10}
                width={20}
                className="mx-auto mb-3"
                alt="Your Company"
              />
              <div
                className={`${
                  selectedCategory == d?.name
                    ? 'text-zinc-800 text-sm font-medium border-b-2 border-green-900 pb-2'
                    : 'text-neutral-500 text-sm font-normal '
                }`}
              >
                {d?.name}
              </div>
            </div>
          ))}
        </div>
        <div
          className="text-green-400  w-50 h-50 bg-green-200 hover:bg-green-400 cursor-pointer z-50"
          onClick={() => scrollTo(+SCROLLER_VALUE)}
        >
          <ChevronRight size={32} />
        </div>
      </div>
      <BookCollection selectedCategory={selectedCategory} />
    </div>
  )
}

export default Categories
