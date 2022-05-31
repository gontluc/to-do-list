import './ManageFile.css'
import Button from '../Button/Button'

const ManageFile = () => {

    // Upload JSON file
    // Can't do JSON server on Github pages (static website)
    /* useEffect(() => {
        async function addFile(e) { async () => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 

            let text = (e.target.result)
            text = JSON.parse(text)
            console.log(text.tasks)
            console.log(tasks)
            setTasks(text.tasks)
        }
        reader.readAsText(e.target.files[0])
        }}
        addFile(e);
    }) */

  return (
    <form className='form-div'>
        <div className="form-box">
            <label>Upload JSON file</label>
            <input 
                type="file" 
                accept='.json' 
                /* onChange={} */
            />
        </div>

        <div className="form-box">
            <label>Download JSON file</label>
            <a href="" download>
                <Button className='btn-download' color='blue' text='Download'/>
            </a>
        </div>
    </form>
  )
}

export default ManageFile