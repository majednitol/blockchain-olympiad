import { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./dashboard.module.css";
import { HealthContext } from "@/context/Health";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const { account, ConnectedAccountUser } = useContext(HealthContext);
  return (
    <>
      <div className="dashboard">
        <div id="mySidenav" className={styles.mySidenav}>
          <nav className={styles.dashboardNav}>
            <div className={styles.sidebarMenu}>
              <ul className={styles.sidebarMenu__list}>
                <li className={styles.sidebarMenu__list__item}>
                  <Link
                    href="/dashboard"
                    className={styles.sidebarMenu__list__item__link}>
                    <p>Dashboard</p>
                  </Link>
                  {ConnectedAccountUser == 5 && (
                    <Link
                      href="/dashboard/patient-personal-details"
                      className={styles.sidebarMenu__list__item__link}>
                      <p>Pasent Details</p>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className={styles.content} id="dashboard-container__main">
          {children}
        </div>
      </div>
    </>
  );
}
