
import './App.css'

function App() {
  

  return (
    <>
    <main className='relative flex items-center justify-center flex-col gap-10 p-4'>
      <div className='fixed top-0 right-0 w-[50px] h-[30px] cursor-pointer'>
        <img className='p-1' src="/images/menuIcon.png" alt="menuIcon" />
      </div>
      <div className='box_content static text-right'>
      <img className="absolute top-[-70px] bottom-40 left-[-270px]" src="/images/image1.png" alt="imagen1" />
      </div>
      <h1 className='w-[350px] text-4xl text-white'>Hi, my name is Angel i'm an web developer.</h1>
      <div className='p-2 w-[300px] h-[100px] flex items-center justify-center flex-col gap-4'>
      
        <button className='bg-gradient-to-r from-slate-400  via-slate-600 to-slate-700 w-[160px] py-2 rounded-3xl shadow hover:shadow-lg text-white'>Hire me</button>
        <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[160px] py-2 rounded-3xl text-white shadow-lg shadow-purple-500/50'>Download CV</button>
      </div>
      <section className='w-full h-[600px] mt-6'>
        <div className='relative w-[770px] h-[600px]'>
        <img className='w-[900px] absolute left-[-270px] bottom-0 top-4' src="/images/bgBody.png"/> 
        <section className=' w-[200px] absolute left-20 top-60 text-white text-left flex flex-col gap-4'>
          <h1><b>About me</b></h1>
          <p className='text-xs'>Soy un joven estudiante de ingenieria
            en computacion
          </p>
          </section>

        </div>
        
        

      </section>
    

    </main>
    
      
    </>
  )
}

export default App
