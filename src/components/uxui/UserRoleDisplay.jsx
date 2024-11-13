export default function UserRolDisplay({fontSize, placeHolder}) {
    return (
        <div className={` ${fontSize} p-2 pl-6 pr-6 text-fuchsia-700 border-fuchsia-700 border-[1px] rounded-full`}>{placeHolder}</div>
    )
}