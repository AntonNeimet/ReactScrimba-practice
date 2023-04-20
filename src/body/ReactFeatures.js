import Feature from "./Feature";
import './MainBody.css'

function ReactFeatures() {
    return(<ul className="list">
        <Feature text={'Was first released in 2013'}/>
        <Feature text={'Was originally created by Jordan Walke'}/>
        <Feature text={'Has well over 100K stars on GitHub'}/>
        <Feature text={'Is maintained by Facebook'}/>
        <Feature text={'Powers thousands of enterprise apps, including mobile apps'}/>
    </ul>)
}

export default ReactFeatures;