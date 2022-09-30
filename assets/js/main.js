function side(){
    return(
        <div>            
            <h1>
                <i class='bx bxs-map' ></i> Sua localização é:
            </h1>
        </div>
    )
}

const root=document.getElementById("root")
ReactDOM.render(<side />,root)