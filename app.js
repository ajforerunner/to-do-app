// Destructure React hooks and components
const { useState, useEffect } = React;
const { motion, AnimatePresence } = Motion;

// Icon Components
const Icons = {
    Dashboard: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
        </svg>
    ),
    Tasks: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
        </svg>
    ),
    Calendar: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path>
        </svg>
    ),
    Analytics: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
        </svg>
    ),
    Settings: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
        </svg>
    ),
    Add: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
    ),
    Search: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
    ),
    Close: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
    ),
    CheckCircle: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
        </svg>
    ),
    PendingActions: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71zM18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11c-.59-.57-1.07-1.25-1.42-2H6V5h2v3h8V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2zm-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
        </svg>
    ),
    Assignment: () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
        </svg>
    )
};

// Task Form Component
const TaskForm = ({ bucketId, onAddTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim() !== '') {
            onAddTask(bucketId, taskText);
            setTaskText('');
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="task-input"
                placeholder="Add a new task..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button type="submit" className="add-btn">
                <Icons.Add />
            </button>
        </form>
    );
};

// App Component
const App = () => {
    const [buckets, setBuckets] = useState(() => {
        const saved = localStorage.getItem('taskflow-buckets');
        const initialValue = JSON.parse(saved);
        return initialValue || [
            {
                id: 'bucket-1',
                name: 'Work Tasks',
                color: '#22c55e',
                tasks: [
                    { id: 'task-1', text: 'Finish project proposal', completed: false },
                    { id: 'task-2', text: 'Client meeting at 2pm', completed: true },
                    { id: 'task-3', text: 'Review team performance', completed: false }
                ]
            },
            {
                id: 'bucket-2',
                name: 'Personal',
                color: '#0ea5e9',
                tasks: [
                    { id: 'task-4', text: 'Grocery shopping', completed: false },
                    { id: 'task-5', text: 'Gym workout', completed: false },
                    { id: 'task-6', text: 'Call mom', completed: true }
                ]
            },
            {
                id: 'bucket-3',
                name: 'Learning',
                color: '#f97316',
                tasks: [
                    { id: 'task-7', text: 'React tutorial', completed: true },
                    { id: 'task-8', text: 'Read JavaScript book', completed: false },
                    { id: 'task-9', text: 'Practice CSS animations', completed: false }
                ]
            }
        ];
    });

    const [showAddBucketModal, setShowAddBucketModal] = useState(false);
    const [newBucketName, setNewBucketName] = useState('');
    const [selectedColor, setSelectedColor] = useState('#22c55e');
    const [activeTab, setActiveTab] = useState('dashboard');
    const [searchTerm, setSearchTerm] = useState('');

    // Calculate statistics
    const totalTasks = buckets.reduce((total, bucket) => total + bucket.tasks.length, 0);
    const completedTasks = buckets.reduce((total, bucket) => 
        total + bucket.tasks.filter(task => task.completed).length, 0);
    const pendingTasks = totalTasks - completedTasks;
    const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Save to localStorage when buckets change
    useEffect(() => {
        localStorage.setItem('taskflow-buckets', JSON.stringify(buckets));
    }, [buckets]);

    // Get current date
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    // Colors for bucket selection
    const bucketColors = [
        '#22c55e', '#0ea5e9', '#f97316', '#8b5cf6', 
        '#ec4899', '#f43f5e', '#10b981', '#6366f1'
    ];

    // Handle adding a new bucket
    const handleAddBucket = (e) => {
        e.preventDefault();
        if (newBucketName.trim() === '') return;

        const newBucket = {
            id: `bucket-${Date.now()}`,
            name: newBucketName,
            color: selectedColor,
            tasks: []
        };

        setBuckets([...buckets, newBucket]);
        setNewBucketName('');
        setSelectedColor('#22c55e');
        setShowAddBucketModal(false);
    };

    // Handle adding a new task
    const handleAddTask = (bucketId, taskText) => {
        if (taskText.trim() === '') return;

        const newTask = {
            id: `task-${Date.now()}`,
            text: taskText,
            completed: false
        };

        setBuckets(buckets.map(bucket => 
            bucket.id === bucketId 
                ? { ...bucket, tasks: [...bucket.tasks, newTask] } 
                : bucket
        ));
    };

    // Handle toggling task completion
    const handleToggleTask = (bucketId, taskId) => {
        setBuckets(buckets.map(bucket => 
            bucket.id === bucketId 
                ? { 
                    ...bucket, 
                    tasks: bucket.tasks.map(task => 
                        task.id === taskId 
                            ? { ...task, completed: !task.completed } 
                            : task
                    ) 
                } 
                : bucket
        ));
    };

    // Handle deleting a task
    const handleDeleteTask = (bucketId, taskId) => {
        setBuckets(buckets.map(bucket => 
            bucket.id === bucketId 
                ? { 
                    ...bucket, 
                    tasks: bucket.tasks.filter(task => task.id !== taskId) 
                } 
                : bucket
        ));
    };

    // Handle deleting a bucket
    const handleDeleteBucket = (bucketId) => {
        if (window.confirm('Are you sure you want to delete this bucket and all its tasks?')) {
            setBuckets(buckets.filter(bucket => bucket.id !== bucketId));
        }
    };

    // Filter buckets based on search term
    const filteredBuckets = buckets.filter(bucket => 
        bucket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bucket.tasks.some(task => task.text.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="app-container">
            {/* Sidebar */}
            <motion.div 
                className="sidebar"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="logo">
                    <div className="logo-icon">TF</div>
                    <div className="logo-text">TaskFlow</div>
                </div>

                <div className="nav">
                    <a 
                        className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <div className="nav-icon"><Icons.Dashboard /></div>
                        Dashboard
                    </a>
                    <a 
                        className={`nav-item ${activeTab === 'tasks' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tasks')}
                    >
                        <div className="nav-icon"><Icons.Tasks /></div>
                        My Tasks
                    </a>
                    <a 
                        className={`nav-item ${activeTab === 'calendar' ? 'active' : ''}`}
                        onClick={() => setActiveTab('calendar')}
                    >
                        <div className="nav-icon"><Icons.Calendar /></div>
                        Calendar
                    </a>
                    <a 
                        className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
                        onClick={() => setActiveTab('analytics')}
                    >
                        <div className="nav-icon"><Icons.Analytics /></div>
                        Analytics
                    </a>
                    <a 
                        className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <div className="nav-icon"><Icons.Settings /></div>
                        Settings
                    </a>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="main-content">
                <motion.div 
                    className="welcome-header"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="greeting">Hello, User!</h1>
                    <p className="date-display">{formattedDate}</p>
                </motion.div>

                <motion.div 
                    className="search-bar"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="search-icon"><Icons.Search /></div>
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search tasks..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </motion.div>

                <motion.div 
                    className="stats-row"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="stat-card">
                        <div className="stat-icon total"><Icons.Assignment /></div>
                        <div className="stat-info">
                            <div className="stat-value">{totalTasks}</div>
                            <div className="stat-label">Total Tasks</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon completed"><Icons.CheckCircle /></div>
                        <div className="stat-info">
                            <div className="stat-value">{completedTasks}</div>
                            <div className="stat-label">Completed</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon pending"><Icons.PendingActions /></div>
                        <div className="stat-info">
                            <div className="stat-value">{pendingTasks}</div>
                            <div className="stat-label">Pending</div>
                        </div>
                    </div>
                </motion.div>

                <div className="progress-section">
                    <motion.div 
                        className="section-header"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h2 className="section-title">Progress</h2>
                    </motion.div>
                    <motion.div 
                        className="progress-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h3 className="progress-title">Task Completion</h3>
                        <div className="progress-bar-container">
                            <div 
                                className="progress-bar-fill" 
                                style={{ width: `${completionPercentage}%` }}
                            ></div>
                        </div>
                        <div className="progress-stats">
                            <div className="progress-stat">
                                <div className="progress-value">{completionPercentage}%</div>
                                <div className="progress-label">Completed</div>
                            </div>
                            <div className="progress-stat">
                                <div className="progress-value">{completedTasks}</div>
                                <div className="progress-label">Done</div>
                            </div>
                            <div className="progress-stat">
                                <div className="progress-value">{pendingTasks}</div>
                                <div className="progress-label">Left</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    className="section-header"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <h2 className="section-title">My Buckets</h2>
                    <div className="view-all">View All</div>
                </motion.div>

                <div className="buckets-grid">
                    {filteredBuckets.map((bucket, index) => (
                        <motion.div 
                            className="bucket-card" 
                            key={bucket.id}
                            style={{ borderTopColor: bucket.color }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                        >
                            <div className="bucket-header">
                                <h3 className="bucket-title">{bucket.name}</h3>
                                <div className="bucket-actions">
                                    <button 
                                        className="bucket-action"
                                        onClick={() => handleDeleteBucket(bucket.id)}
                                    >
                                        <Icons.Close />
                                    </button>
                                </div>
                            </div>
                            <ul className="task-list">
                                {bucket.tasks.map((task, taskIndex) => (
                                    <motion.li 
                                        className={`task-item ${task.completed ? 'task-checked' : ''}`}
                                        key={task.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: taskIndex * 0.1 }}
                                        style={{ '--i': taskIndex }}
                                    >
                                        <input 
                                            type="checkbox" 
                                            className="task-checkbox" 
                                            checked={task.completed}
                                            onChange={() => handleToggleTask(bucket.id, task.id)}
                                        />
                                        <span className="task-text">{task.text}</span>
                                        <button 
                                            className="task-delete"
                                            onClick={() => handleDeleteTask(bucket.id, task.id)}
                                        >
                                            ✕
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                            <TaskForm bucketId={bucket.id} onAddTask={handleAddTask} />
                        </motion.div>
                    ))}
                    <motion.div 
                        className="add-bucket-btn"
                        onClick={() => setShowAddBucketModal(true)}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + (filteredBuckets.length * 0.1) }}
                    >
                        <div className="add-bucket-icon"><Icons.Add /></div>
                        Add New Bucket
                    </motion.div>
                </div>

                {/* Add Bucket Modal */}
                <AnimatePresence>
                    {showAddBucketModal && (
                        <motion.div 
                            className="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div 
                                className="modal"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                            >
                                <div className="modal-header">
                                    <h2 className="modal-title">Create New Bucket</h2>
                                    <button 
                                        className="close-modal"
                                        onClick={() => setShowAddBucketModal(false)}
                                    >
                                        <Icons.Close />
                                    </button>
                                </div>
                                <form onSubmit={handleAddBucket}>
                                    <div className="form-group">
                                        <label className="form-label">Bucket Name</label>
                                        <input 
                                            type="text" 
                                            className="form-input"
                                            placeholder="e.g., Work, Personal, Learning"
                                            value={newBucketName}
                                            onChange={(e) => setNewBucketName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Color</label>
                                        <div className="color-picker">
                                            {bucketColors.map(color => (
                                                <div 
                                                    key={color}
                                                    className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                                                    style={{ backgroundColor: color }}
                                                    onClick={() => setSelectedColor(color)}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <button 
                                            type="button" 
                                            className="btn btn-secondary"
                                            onClick={() => setShowAddBucketModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button type="submit" className="btn btn-primary">
                                            Create Bucket
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
