import { useState } from "react"
import MathJax from "./MathJax"

MathJax
export default function Homepage(){
    const mathContent = `Rumus Einstein: $$E = mc^2$$`
    const [formula, setFormula] = useState("")
    return(
        <div>
            <textarea className="w-96 h-96" type="text" name='setFormula' value={formula} onChange={(e) => setFormula(e.target.value)} />
            {/* <div>{formula}</div> */}
            <div >
            </div>
                <MathJax className="w-full h-96 bg-yellow-500"  formula={formula} ></MathJax>
        </div>
    )
}