import { firebaseGetAllDoc, firebaseGetDoc } from '@/firebase/auth/signup'
import { firebaseAddBookInCart } from '@/firebase/utils'
import { Spinner } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

// const books = [
//   {
//     id: '12345',
//     imageUrl: './bookImage.svg',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
//   {
//     imageUrl: './bookImage.svg',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
//   {
//     imageUrl: './bookImage.svg',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
//   {
//     imageUrl: './bookImage.svg',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
//   {
//     imageUrl: './bookImage.svg',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
// ]
const BookCollection = ({ selectedCategory }) => {
  const [books, setBooks] = useState()
  const [loading, setLoading] = useState(false)
  const [addCart, setAddCart] = useState()
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      let data = await firebaseGetAllDoc('books')
      const data1 = data?.filter((d) => d?.category === selectedCategory)
      setBooks(data1)
      setLoading(false)
    }
    fetchBooks()
  }, [selectedCategory])
console.log({books})
  return (
    <>
      {loading && <div className="text-center mt-8"><Spinner  /></div>}
      {books?.length > 0 ? (
        <div className="p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books?.map((d, index) => (
            <div>
              <div className="mb-8">
                <Image
                  src={d?.urls[0]}
                  height={10}
                  width={250}
                  className=" shadow-lg mb-3 mx-auto"
                  alt="Your Company"
                />
                <div className="w-[250px] mx-auto flex">
                  <Link href={`/marketplace/${d?.id}`} className="">
                    <div className="flex justify-between ml-2">
                      <div className="text-zinc-800 text-lg font-bold leading-snug mt-2 mb-2">
                        {d?.title}
                      </div>
                    </div>

                    <div className="text-zinc-800 text-sm font-normal mb-2 ml-2 mx-auto">
                      {d?.author}
                    </div>
                    <div className="mx-auto ml-2 text-zinc-500 text-sm font-bold underline leading-tight">
                      {'100+ listings from $10 and up'}
                    </div>
                  </Link>
                  <div
                    className="w-[25px] lg:w-[30px] cursor-pointer"
                    // onClick={() => addToCart(d)}
                  >
                    <Image
                      src="/addToCart.png"
                      height={5}
                      width={30}
                      className=" mt-2"
                      alt="Your Company"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-zinc-800 text-lg font-bold text-center mt-8 mx-auto flex justify-center">
          No Book Available
        </div>
      )}
    </>
  )
}

export default BookCollection
