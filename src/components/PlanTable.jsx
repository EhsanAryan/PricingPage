import React from 'react';
import CheckCircleIcon from './CheckCircleIcon';
import CustomBadge from './customized-components/CustomBadge';
import CutsomButton from './customized-components/CutsomButton';
import TimesCircleIcon from './TimesCircleIcon';

const rows = [
    {
        title: "14-days free trial",
        cells: ["check", "check", "check"]
    },
    {
        title: "No user limit",
        cells: ["times", "times", "check"]
    },
    {
        title: "Product Support",
        cells: ["times", "check", "check"]
    },
    {
        title: "Email Support",
        cells: ["times", "available", "check"]
    },
    {
        title: "Integrations",
        cells: ["times", "check", "check"]
    },
    {
        title: "Removal of Front branding",
        cells: ["times", "available", "check"]
    },
    {
        title: "Active maintenance & support",
        cells: ["times", "times", "check"]
    },
    {
        title: "Data storage for 365 days",
        cells: ["times", "times", "check"]
    }
]

const PlanTable = () => {
    return (
        <div className="plan-section">
            <div className="mb-4">
                <h2 className="main-title-text-color">Pick a plan that works best for you</h2>
                <p>Stay cool, we have a 48-hour money back guarantee!</p>
            </div>

            <div className='container px-4 px-md-0'>
                <div className="table-responsive border p-0 rounded-3">
                    <table class="plan-table table table-borderless table-striped mb-0">
                        <thead>
                            <tr className="border-bottom">
                                <th scope="col">
                                    <p className="main-text-color my-0">FEATURES</p>
                                    <small className="muted-text-color">Native Front Features</small>
                                </th>
                                <th scope="col">
                                    <p className="main-text-color my-0">STARTER</p>
                                    <small className="muted-text-color">Free</small>
                                </th>
                                <th scope="col">
                                    <p className="main-text-color my-0 position-relative">
                                        PRO
                                        <CustomBadge
                                            backgroundColor="#7367f0"
                                            color="#fff"
                                            className="rounded-circle star-badge"
                                        >
                                            <i class="fa-regular fa-star"></i>
                                        </CustomBadge>
                                    </p>
                                    <small className="muted-text-color">$7.5/Month</small>
                                </th>
                                <th scope="col">
                                    <p className="main-text-color my-0">ENTERPRISE</p>
                                    <small className="muted-text-color">$16/Month</small>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((r, index) => {
                                return (
                                    <tr key={`plan-row-${index}`} className="border-bottom">
                                        <td className="main-text-color">{r.title}</td>
                                        {r.cells.map(c => {
                                            return (
                                                <td>
                                                    {
                                                        c === "check" ? (
                                                            <CheckCircleIcon />
                                                        ) : c === "times" ? (
                                                            <TimesCircleIcon />
                                                        ) : (
                                                            <CustomBadge
                                                                backgroundColor="#eae8fd"
                                                                color="#7367f0"
                                                                fontSize="0.8rem"
                                                                className="m-0"
                                                            >
                                                                ADD-ON AVAILABLE
                                                            </CustomBadge>
                                                        )
                                                    }
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                            <tr>
                                <td></td>
                                <td>
                                    <CutsomButton
                                        backgroundColor="#e9e7fd"
                                        color="#7367f0"
                                        hoverBackgroundColor="#d9d7ef"
                                        href="https://github.com/EhsanAryan"
                                        fontSize="0.9rem"
                                    >
                                        Choose Plan
                                    </CutsomButton>
                                </td>
                                <td>
                                    <CutsomButton
                                        backgroundColor="#7367f0"
                                        color="#fff"
                                        hoverBackgroundColor="#6055da"
                                        href="https://github.com/EhsanAryan"
                                        fontSize="0.9rem"
                                    >
                                        Choose Plan
                                    </CutsomButton>
                                </td>
                                <td>
                                    <CutsomButton
                                        backgroundColor="#e9e7fd"
                                        color="#7367f0"
                                        hoverBackgroundColor="#d9d7ef"
                                        href="https://github.com/EhsanAryan"
                                        fontSize="0.9rem"
                                    >
                                        Choose Plan
                                    </CutsomButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PlanTable;


