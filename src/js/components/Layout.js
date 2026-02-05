import {Header} from './Header.js';

export function layout(){
    const root = document.createElement('div')
    root.id = 'root';

    const main = document.createElement('main')
    main.id = 'main';

    const footer = document.createElement('footer')
    footer.innerHTML = `
        <p>&copy; 2026 Movie Discovery Platform</p>
    `;
    
    root.append(Header(),main,footer)
    return root
}