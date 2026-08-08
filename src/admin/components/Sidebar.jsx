import{NavLink,useNavigate}from"react-router-dom";
import{FaChartPie,FaChartLine,FaCog,FaNewspaper,FaSignOutAlt,FaChevronLeft,FaChevronRight}from"react-icons/fa";
import styles from"../styles/Sidebar.module.css";

export default function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("adminToken");
    if (setMobileOpen) setMobileOpen(false);
    navigate("/admin/login");
  };
  const menu = [
    { title: "Dashboard", icon: <FaChartPie />, path: "/admin/dashboard" },
    { title: "Insights", icon: <FaNewspaper />, path: "/admin/insights" },
    { title: "Analytics", icon: <FaChartLine />, path: "/admin/analytics" },
    { title: "Settings", icon: <FaCog />, path: "/admin/settings" }
  ];

  return (
    <>
      <div
        className={`${styles.scrim} ${mobileOpen ? styles.show : ''}`}
        onClick={() => setMobileOpen && setMobileOpen(false)}
      />
      <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''} ${mobileOpen ? styles.show : ''}`}>
        <div className={styles.logoSection}>
          <img src="/c2flooooo.png" alt="Connect2Future" className={styles.logoImage} />
          {(!collapsed || mobileOpen) && (
            <div className={styles.logoText}>
              <h2>Connect2Future</h2>
              <p>Admin Portal</p>
            </div>
          )}
        </div>
        <nav className={styles.nav}>
          {menu.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
              onClick={() => setMobileOpen && setMobileOpen(false)}
            >
              <span className={styles.icon}>{item.icon}</span>
              {(!collapsed || mobileOpen) && <span>{item.title}</span>}
            </NavLink>
          ))}
        </nav>
        <div className={styles.bottom}>
          <button type="button" className={styles.collapseBtn} onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
          <button type="button" className={styles.logout} onClick={logout}>
            <FaSignOutAlt />
            {(!collapsed || mobileOpen) && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}