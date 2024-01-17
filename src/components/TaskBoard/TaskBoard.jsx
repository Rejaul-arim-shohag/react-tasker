import { useState } from "react"
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import { TaskSearch } from "./TaskSearch";
import { AddTaskModal } from "./AddTaskModal";
const defaultTask = {
    'id': crypto.randomUUID(),
    'title': "Integration API",
    'description': "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently",
    'tags': ["web", "react", "js"],
    "priority": "High",
    "isFavorite": true

}
export default function TaskBoard() {
    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);
    const handleAddTask = (task) => {
        console.log("Handle add",task)
    }
    return (
        <section className="mb-20" id="tasks">
            {
                showAddModal && <AddTaskModal onSave={handleAddTask}/>
            }
            <div className="container">
                <div className="p-2 flex justify-end">
                    <TaskSearch />
                </div>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskAction onAddClick={() => setShowAddModal(true)} />
                    <div className="overflow-auto">
                        <TaskList tasks={tasks} />
                    </div>
                </div>
            </div>
        </section>
    );
}
