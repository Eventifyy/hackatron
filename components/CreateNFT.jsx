/* eslint-disable @next/next/no-img-element */
import {
  useGlobalState,
  setGlobalState,
  setLoadingMsg,
  setAlert,
} from '../store'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Web3Storage } from 'web3.storage'
//   import { mintNFT } from '../Blockchain.Services'



const CreateNFT = () => {
  const [modal] = useGlobalState('modal')
  const [fileUrl, setFileUrl] = useState('')
  const [imgBase64, setImgBase64] = useState(null)

  const [formInput, setFormInput] = useState({
    price: '',
    name: '',
    cover: null,
    description: '',
    date: '',
    venue: '',
    date: '',
    supply: null,
  })

  // -----------

  function getAccessToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkyMjkyQjQ5YzFjN2ExMzhERWQxQzQ3NGNlNmEyNmM1NURFNWQ0REQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjUyMzg2MDc1NDEsIm5hbWUiOiJNZXRhRmkifQ.cwyjEIx8vXtTnn8Y3vctroo_rooHV4ww_2xKY-MT0rs'
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
  }

  const uploadToIPFS = async (files) => {
    const client = makeStorageClient()
    console.log(files)
    // const cid = await client.put(files)
    // return cid
  }

  const changeImage = async (e) => {

    const reader = new FileReader()
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])
    
    reader.onload = async (readerEvent) => {
      const file = readerEvent.target.result
      setImgBase64(file)
    }
    const file = e.target.files[0]
    // console.log(file)
    // const metaCID = await uploadToIPFS(file)
    // const url = `https://ipfs.io/ipfs/${metaCID}/data.json`
    // setFormInput({ ...formInput, cover: url })

  }

  const mint = async (e) => {}

  // -----------

  const closeModal = () => {
    setGlobalState('modal', 'scale-0')
    resetForm()
  }

  const resetForm = () => {
    setFileUrl('')
    setImgBase64(null)
    setTitle('')
    setPrice('')
    setVenue('')
    setDate('')
    setHost('')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
          justify-center bg-black bg-opacity-50 transform
          transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-gray-400">Add Event</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-gray-400" />
            </button>
          </div>

          <div className="flex flex-row justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
              <img
                alt="NFT"
                className="h-full w-full object-cover cursor-pointer"
                src={
                  imgBase64 ||
                  'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80'
                }
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/webp"
                className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#19212c] file:text-gray-400
                    hover:file:bg-[#1d2631]
                    cursor-pointer focus:ring-0 focus:outline-none"
                onChange={changeImage}
                required
              />
            </label>
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                  text-slate-500 bg-transparent border-0
                  focus:outline-none focus:ring-0"
              type="text"
              name="title"
              placeholder="Name"
              onChange={(e) =>
                setFormInput({ ...formInput, name: e.target.value })
              } 
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              className="block w-full text-sm resize-none
                  text-slate-500 bg-transparent border-0
                  focus:outline-none focus:ring-0 h-20"
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) =>
                setFormInput({ ...formInput, description: e.target.value })
              }
              required
            ></textarea>
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                  text-slate-500 bg-transparent border-0
                  focus:outline-none focus:ring-0"
              type="text"
              name="venue"
              placeholder="Venue"
              onChange={(e) =>
                setFormInput({ ...formInput, venue: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                  text-slate-500 bg-transparent border-0
                  focus:outline-none focus:ring-0"
              type="date"
              name="date"
              placeholder="Date"
              onChange={(e) =>
                setFormInput({ ...formInput, date: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                  text-slate-500 bg-transparent border-0
                  focus:outline-none focus:ring-0"
              type="text"
              name="host"
              placeholder="Host"
              onChange={(e) =>
                setFormInput({ ...formInput, supply: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                  text-slate-500 bg-transparent border-0
                  focus:outline-none focus:ring-0"
              type="number"
              step={0.01}
              min={0.01}
              name="price"
              placeholder="Price (Eth)"
              onChange={(e) =>
                setFormInput({ ...formInput, price: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            onClick={mint}
            className="flex flex-row justify-center items-center
                w-full text-white text-md bg-[#e32970]
                hover:bg-[#bd255f] py-2 px-5 rounded-full
                drop-shadow-xl border border-transparent
                hover:bg-transparent hover:text-[#e32970]
                hover:border hover:border-[#bd255f]
                focus:outline-none focus:ring mt-5"
          >
            Host Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateNFT
