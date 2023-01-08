// import React from 'react';
import styles from "./todolist.module.scss";
import gear from "./shest.svg";

const ToDoList = () => {
  return (
    <>
      <div className={styles.todo}>
        <header className={styles.header}>
          <h1 className={styles.title}>To Do</h1>
          <button className={styles.button}>
            <img src={gear} alt="" className={styles.buttond} />
          </button>
        </header>
        <section className={styles.todo_list}>
          <div className={styles.todo__todayBlock}>
            <input type="checkbox" className={styles.todo__checkbox} />
            <p className={styles.todo__today}>Today Tasks</p>
          </div>
          <ul></ul>
        </section>
      </div>
    </>
  );
};

export default ToDoList;
