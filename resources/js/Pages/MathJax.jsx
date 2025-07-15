import { useEffect, useRef } from 'react'

export default function MathJax({formula, className=''}){
    const mathRef = useRef(null)
    // const mathContent = `Rumus Einstein: $$E = mc^2$$`
    useEffect(() => {
        if (window.MathJax && mathRef.current) { window.MathJax.typesetPromise([mathRef.current]).catch((err) => console.error('MathJax error:', err.message))}}, [formula])
        return (
            // <div className={' ' + className} ref={mathRef} dangerouslySetInnerHTML={{ __html: formula }} />
            <div className={' ' + className} ref={mathRef}>{formula}</div> 
        )
    
}