import React from 'react'

export default function Footer() {
  return (
    <>
<footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-3xl font-semibold mb-2">
        <span className="text-purple-500">EpicPlay</span>   {new Date().getFullYear()} ©
        </p>
        <p className="text-lg mb-2">A comprehensive game listing website.</p>
        <p className="text-sm text-gray-400">Powered by <a href="https://rawg.io/apidocs" className=" text-purple-500" target="_blank" rel="noopener noreferrer">RAWG API</a></p>
      </div>
    </footer>
    </>
  )
}
