import React from 'react';

function NewsFeed() {
    return (
        <div>
            <div className="p-8 flex bg-white rounded">
                <img src="logo_icon.png" alt="New_feedlogo" />
                <div className="ml-8">
                    <h5 className="font-dropdown my-1 font-bold text-xl text-black-dark">.NET Core October 2020 Updates - 2.1.23 and 3.1.9 from .NET Blog</h5>
                    <p className="font-dropdown my-2 text-lg text-gray-dark">Kotlin, the JetBrains-developed, statically typed language for JVM, Android, and web development, is due for a compiler rewrite, multiplatform mobile improvements, and a Kotlin-to-WebAssembly multiplatform mobile improvements and other stuff you</p>
                    <div className="flex justify-around pl-40">
                        <span>
                            <svg className="inline" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9.71998C9.49333 9.71998 9.04 9.91998 8.69333 10.2333L3.94 7.46665C3.97333 7.31331 4 7.15998 4 6.99998C4 6.83998 3.97333 6.68665 3.94 6.53331L8.64 3.79331C9 4.12665 9.47333 4.33331 10 4.33331C11.1067 4.33331 12 3.43998 12 2.33331C12 1.22665 11.1067 0.333313 10 0.333313C8.89333 0.333313 8 1.22665 8 2.33331C8 2.49331 8.02667 2.64665 8.06 2.79998L3.36 5.53998C3 5.20665 2.52667 4.99998 2 4.99998C0.893333 4.99998 0 5.89331 0 6.99998C0 8.10665 0.893333 8.99998 2 8.99998C2.52667 8.99998 3 8.79331 3.36 8.45998L8.10667 11.2266C8.07333 11.3666 8.05333 11.5133 8.05333 11.6666C8.05333 12.74 8.92667 13.6066 10 13.6066C11.0733 13.6066 11.9467 12.74 11.9467 11.6666C11.9467 10.5933 11.0733 9.71998 10 9.71998ZM10 1.66665C10.3667 1.66665 10.6667 1.96665 10.6667 2.33331C10.6667 2.69998 10.3667 2.99998 10 2.99998C9.63333 2.99998 9.33333 2.69998 9.33333 2.33331C9.33333 1.96665 9.63333 1.66665 10 1.66665ZM2 7.66665C1.63333 7.66665 1.33333 7.36665 1.33333 6.99998C1.33333 6.63331 1.63333 6.33331 2 6.33331C2.36667 6.33331 2.66667 6.63331 2.66667 6.99998C2.66667 7.36665 2.36667 7.66665 2 7.66665ZM10 12.3333C9.63333 12.3333 9.33333 12.0333 9.33333 11.6666C9.33333 11.3 9.63333 11 10 11C10.3667 11 10.6667 11.3 10.6667 11.6666C10.6667 12.0333 10.3667 12.3333 10 12.3333Z" fill="#87919A" />
                            </svg><span className="ml-2">Share</span>
                        </span>
                        <span>
                            <svg className="inline" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00004 13.6666C4.82323 13.6666 4.65366 13.5964 4.52864 13.4714C4.40361 13.3464 4.33337 13.1768 4.33337 13V11H1.66671C1.31309 11 0.973947 10.8595 0.723898 10.6095C0.47385 10.3594 0.333374 10.0203 0.333374 9.66665V1.66665C0.333374 1.31302 0.47385 0.973886 0.723898 0.723837C0.973947 0.473789 1.31309 0.333313 1.66671 0.333313H12.3334C12.687 0.333313 13.0261 0.473789 13.2762 0.723837C13.5262 0.973886 13.6667 1.31302 13.6667 1.66665V9.66665C13.6667 10.0203 13.5262 10.3594 13.2762 10.6095C13.0261 10.8595 12.687 11 12.3334 11H8.26671L5.80004 13.4733C5.66671 13.6 5.50004 13.6666 5.33337 13.6666H5.00004ZM5.66671 9.66665V11.72L7.72004 9.66665H12.3334V1.66665H1.66671V9.66665H5.66671Z" fill="#87919A" />
                            </svg><span className="ml-2">36 Comments</span>
                        </span>
                        <span>
                            <svg className="inline" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 6.66667V12H5V6.66667H0.5L8 0L15.5 6.66667H11ZM4.25 5.33333H6.5V10.6667H9.5V5.33333H11.75L8 2L4.25 5.33333Z" fill="#87919A" />
                            </svg><span className="ml-2">254</span>
                        </span>
                        <span>
                            <svg className="inline" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 5.33333L8 12L0.5 5.33333H5V0H11V5.33333H15.5ZM8 10L11.75 6.66667H9.5V1.33333H6.5V6.66667H4.25L8 10Z" fill="#87919A" />
                            </svg><span className="ml-2">30</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed