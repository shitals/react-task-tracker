function Header ({ onAdd, showAdd }) {
    return(
        <header className='header'>
            <h1>Task Tracker</h1>
            <button 
            className={showAdd?'btn btn-red' :'btn btn-green' }
            onClick={onAdd}>
            {showAdd ? 'Close' : 'Add'}
            </button>
        </header>
    )
}
export default Header;