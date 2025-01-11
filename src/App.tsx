import Logo from "../public/logo.svg"

import GoogleClassroomIcon from "./assets/landing/google-classroom.svg"
import RubricIcon from "./assets/landing/rubric.svg"
import GradedPaperIcon from "./assets/landing/paper.svg"
import WarningIcon from "./assets/landing/warning.svg"
import CheckmarkIcon from "./assets/landing/checkmark.svg"

import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const CANNED_FEEDBACK =
    "**Summary Evaluation Against Rubric: Accuracy (10/10):** The essay presents accurate information about Abraham Lincoln's life, presidency, and significant contributions, including key events like his election, the Civil..."

const App = () => {
    return (
        <div className="flex min-h-screen w-full flex-1 flex-col">
            <div className="h-2 bg-navy-800"></div>
            <div className="sticky h-10 px-5">
                <div>
                    <img className="h-10" src={Logo} alt="Logo" />
                </div>
            </div>
            <div>
                <div>
                    <p className="mt-10 text-center text-4xl font-bold text-navy-900">Save Time Grading Essays</p>

                    <p className="mt-5 text-center text-lg font-semibold">For ELA teachers in grades 5-12</p>

                    <div className="mx-auto mt-10 flex max-w-[1000px] flex-wrap justify-center gap-4">
                        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
                            <div className="flex flex-col items-center justify-center">
                                <img className="h-16 w-16" src={GradedPaperIcon} alt="Graded Paper" />

                                <p>AI Feedback</p>
                            </div>
                            <div className="flex w-[200px] items-center justify-center">
                                <div>
                                    <p className="text-sm">{CANNED_FEEDBACK}</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <img className="h-16 w-16" src={WarningIcon} alt="AI Detection" />

                                <p>AI Detection</p>
                            </div>
                            <div className="flex w-[200px] items-center justify-center">
                                <div>
                                    <p className="mb-3 text-sm">Probability AI generated</p>
                                    <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-navy-900">
                                        <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-500"></div>
                                        <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-white"></div>
                                        <div className="absolute bottom-0 w-full truncate text-center text-2xl leading-none">
                                            40%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
                            <div className="flex flex-col items-center justify-center">
                                <img className="h-16 w-16" src={GoogleClassroomIcon} alt="Import Essays" />

                                <p>Import Essays</p>
                            </div>
                            <div className="flex w-[200px] items-center justify-center">
                                <div></div>
                            </div>
                        </Card>
                        <Card className="flex h-[220px] w-[370px] justify-center gap-4 rounded p-5">
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative">
                                    <img
                                        src={RubricIcon}
                                        alt="Rubric"
                                        className="transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                                    />
                                    <div className="absolute -top-2 right-0 h-4 w-4 rounded-full bg-green-500 group-hover:scale-125 motion-safe:animate-bounce">
                                        <img src={CheckmarkIcon} alt="Checkmark" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-[200px] flex-col items-center justify-center text-center">
                                <CardTitle className="mb-4">Use Your Rubric</CardTitle>
                                <CardDescription>Use your rubric and start grading essays with ease!</CardDescription>
                                <Button className="mt-4 w-full">Use Your Rubric</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
