import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full py-4 bg-gray-800">
            <div className="container mx-auto flex justify-center">
                <a href="https://github.com/s-gebby" target="_blank" rel="noopener noreferrer" className='text-white hover:text-gray-300 transition-colors flex items-center gap-2'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    )
}