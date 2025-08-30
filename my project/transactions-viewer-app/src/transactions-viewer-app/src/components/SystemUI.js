import React from 'react';

const SystemUI = () => {
    return (
        <div className="system-ui">
            <header>
                <h1>Transaction Viewer</h1>
                <nav>
                    <ul>
                        <li><a href="#transactions">Transactions</a></li>
                        <li><a href="#settings">Settings</a></li>
                    </ul>
                </nav>
            </header>
            <div className="status-indicator">
                <p>Status: Online</p>
            </div>
        </div>
    );
};

export default SystemUI;