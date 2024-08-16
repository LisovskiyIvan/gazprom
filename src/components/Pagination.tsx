

interface Props {
    goNext: ()=> void,
    goBack: ()=> void,
  }

export const Pagination = ({goNext, goBack}: Props) => {
    
    return (
        <div className="w-[100%] flex justify-center my-[35px]">
            <button className="mx-5 border rounded-md p-3 hover:bg-white hover:text-black duration-300" onClick={goBack}>Назад</button>
            <button className="mx-5 border rounded-md p-3 hover:bg-white hover:text-black duration-300" onClick={goNext}>Вперед</button>
        </div>
    )
}