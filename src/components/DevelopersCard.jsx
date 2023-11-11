import roblos from '../assets/roblos.png'
import '../styles/DevelopersCard.css'

function DevelopersCard() {
    return (
        <>
            <div className='form-container developer-card'>
                <div className='developer'>
                    <img src = {roblos} className='developer-image'/>
                    <p className='developer-name'>ROXANNE ANGELLI LOPEZ</p>
                </div>
                <div className='developer'>
                    <img src = {roblos} className='developer-image'/>
                    <p className='developer-name'>REECE SERGEI LIM</p>
                </div>
                <div className='developer'>
                    <img src = {roblos} className='developer-image'/>
                    <p className='developer-name'>ERNIE MANATAD</p>
                </div>
                <div className='developer'>
                    <img src = {roblos} className='developer-image'/>
                    <p className='developer-name'>JASPER LEE MARBELLA</p>
                </div>
            </div>
        </>
    );
}

export default DevelopersCard