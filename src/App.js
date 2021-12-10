import { Room } from './components';
import './App.css';

export default function App() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Mein stylischer Raum</h1>
            <Room visibilityState={false} />
        </div>
    )
}
