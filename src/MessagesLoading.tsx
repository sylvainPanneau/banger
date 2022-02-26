import React, { useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap'

export default function MessagesLoading() {
    useEffect(() => {
        setTimeout(() => {
            const progressBarInner = document.querySelector('.progress-bar-inner') as HTMLElement
            if (progressBarInner) {
                progressBarInner.style.width = '100%';
            }
        }, 250);
    }, []);
    return (
        <div className='progress-bar-wrapper'>
            <ProgressBar className='progress-bar'>
                <ProgressBar className='progress-bar-inner' />
            </ProgressBar>
        </div>
    )
}
