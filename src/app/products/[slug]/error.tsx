'use client'

type ProductDetailErrorProps = {
    error: Error & {digest?:string}
    reset: () => void
}

export default async function ProductsDetailError({error,reset}: ProductDetailErrorProps) {
    return (
        <>
           <h1 className="text-3xl font-bold underline">Ooops. Error</h1>
           <button onClick={()=>{
               reset()
           }}>
                Reset
           </button>
        </>
    );
}




