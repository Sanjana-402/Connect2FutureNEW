import {Outlet} from "react-router-dom";
import {useState} from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/AdminDashboard.module.css";

export default function AdminLayout(){
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className={`${styles.mainWrapper} ${collapsed ? styles.expand : ""}`}>
        <Topbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}