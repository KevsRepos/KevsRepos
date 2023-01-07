<style>
aside {
    display: flex;
}
button {
    border: none;
    height: 100%;
    background: transparent;
    transition: 0.2s;
}
button:hover {
    background-color: rgba(128, 128, 128, 0.2);
}
.date {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
span {
    font-family: 'Roboto';
}
.backToDesktop {
    border-left: 1px gray solid;
}
button img {
    height: 15px;
    padding: 15px;
}
</style>

<aside>
    <button class="date">
        <span>{new Date().toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit' })}</span>
        <span>{new Date().toLocaleDateString()}</span>
    </button>
    <button>
        <img alt="notifications" src="/images/notifications.svg" />
    </button>
    <button class="backToDesktop"></button>
</aside>