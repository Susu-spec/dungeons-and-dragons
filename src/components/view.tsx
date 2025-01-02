import Eye from "../assets/eye.png" 
export default function ViewRow({ data }: {data: any}) {
    console.log(data);
    return (
        <div className="cursor-pointer">
            <img src={Eye} alt="View Cards"/>
        </div>
    )
}