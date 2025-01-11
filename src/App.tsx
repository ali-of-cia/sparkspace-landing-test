import Logo from "../public/logo.svg"

import GoogleClassroomIcon from "./assets/landing/google-classroom.svg"
import RubricIcon from "./assets/landing/rubric.svg"
import GradedPaperIcon from "./assets/landing/paper.svg"
import WarningIcon from "./assets/landing/warning.svg"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Gauge } from "@/components/ui/gauge"
import { Button } from "@/components/ui/button"
import { TypingText } from "@/components/ui/typing-text"

import CheckmarkIcon from "./assets/landing/checkmark.svg"

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
                        <Card className="flex h-[220px] w-[370px] justify-center gap-4 rounded p-5">
                            <div className="flex flex-col items-center justify-center">
                                <img className="h-16 w-16" src={GradedPaperIcon} alt="Graded Paper" />

                                <CardTitle className="mt-4">AI Feedback</CardTitle>
                            </div>
                            <div className="flex w-[200px] items-center justify-center">
                                <CardDescription>
                                    <TypingText text={CANNED_FEEDBACK} speed={100} className="text-sm" />
                                </CardDescription>
                            </div>
                        </Card>
                        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <img className="h-16 w-16" src={WarningIcon} alt="AI Detection" />

                                <CardTitle>AI Detection</CardTitle>
                            </div>
                            <div className="flex w-[200px] items-center justify-center">
                                <div>
                                    <p className="mb-3 text-sm">Probability AI generated</p>
                                    <Gauge percentage={40} ariaLabel="AI generation probability gauge" />
                                </div>
                            </div>
                        </Card>
                        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
                            <div className="flex flex-col items-center justify-center">
                                <img className="h-16 w-16" src={GoogleClassroomIcon} alt="Import Essays" />

                                <CardTitle className="mt-4">Import Essays</CardTitle>
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
                                    <div className="absolute -top-2 right-4 h-4 w-4 rounded-full bg-green-500 group-hover:scale-125 motion-safe:animate-bounce">
                                        <img src={CheckmarkIcon} alt="Checkmark" />
                                    </div>
                                    <CardTitle className="mt-4">Use Your Rubric</CardTitle>
                                </div>
                            </div>
                            <div className="flex w-[180px] flex-col items-center justify-center text-center">
                                <CardDescription className="mt-3 text-gray-500">
                                    Use your rubric and start grading essays with ease!
                                </CardDescription>
                                <Button className="mt-6 bg-green-500 text-white hover:bg-green-600">
                                    Start Grading
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
