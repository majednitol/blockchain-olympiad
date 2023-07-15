import { useContext } from "react";
import styles from "./dashboard.module.css";
import { HealthContext } from "@/context/Health";
import Link from "next/link";

function DashboardLayout({ children }) {
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
                    className={styles.sidebarMenu__list__item__link}
                  >
                    <p>Dashboard</p>
                  </Link>
                  {ConnectedAccountUser == 5 && (
                    <>
                      <Link
                        href="/dashboard/patient-personal-details"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Patient Details</p>
                      </Link>

                      <Link
                        href="/dashboard/patient-file-upload"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>File Upload</p>
                      </Link>
                    </>
                  )}

                  {ConnectedAccountUser == 2 && (
                    <>
                      <Link
                        href="/dashboard/pathologist-personal-data"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Pathologist</p>
                      </Link>
                    </>
                  )}
                  {ConnectedAccountUser == 1 && (
                    <>
                      <Link
                        href="/dashboard/doctor-personal-data"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Doctor personal info</p>
                      </Link>
                      <Link
                        href="/dashboard/patient-list"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Doctor's patient list</p>
                      </Link>
                      <Link
                        href="/dashboard/doctor-file-upload"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>File Upload</p>
                      </Link>
                      <Link
                        href="/dashboard/display-doctor-file"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>display File</p>
                      </Link>

                      <Link
                        href="/dashboard/shared-data-doctor"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Shared Data</p>
                      </Link>
                    </>
                  )}
                  {ConnectedAccountUser == 3 && (
                    <>
                      <Link
                        href="/dashboard/doctor-personal-data"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Parmacy Company</p>
                      </Link>
                    </>
                  )}
                  {ConnectedAccountUser == 4 && (
                    <>
                      <Link
                        href="/dashboard/doctor-personal-data"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Medical Research Lab</p>
                      </Link>
                    </>
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

export default DashboardLayout;
