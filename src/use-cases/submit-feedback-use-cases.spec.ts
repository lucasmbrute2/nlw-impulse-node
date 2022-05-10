import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

describe("Submit feedback", () => {
    it("should able to submit a feedback", async() => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} },
            { sendEmail: async () => {} }
        );

        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comme nt",
            screenshot: "test.jpg"
        })).resolves.not.toThrow()
    });
});
