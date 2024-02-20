function Message ()
{
    const name = "Subrata Mondal"
    if ( name )
        return <h1 className="text-red-400">Hello {name}</h1>
    return <h1 className="text-red-400">Hello World</h1>
}
export default Message