 


const page =  async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <div>
      Home
    </div>
  )
}

export default page