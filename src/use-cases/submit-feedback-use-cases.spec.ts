import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => {} },
    { sendEmail: async () => {} }
);

describe("Submit feedback", () => {
    it("should able to submit a feedback", async () => {
        await expect(
            submitFeedback.execute({
                type: "BUG",
                comment: "example comme nt",
                screenshot: "data:image/png;base64/test.jpg",
            })
        ).resolves.not.toThrow();
    });

    it("should not be able to submit feedback without type", async () => {
        await expect(
            submitFeedback.execute({
                type: "",
                comment: "example content",
            })
        ).rejects.toThrow();
    });

    it("should not be able to submit feedback without comment", async () => {
        await expect(
            submitFeedback.execute({
                type: "BUG",
                comment: "",
            })
        ).rejects.toThrow();
    });

    it("should not be able to submit feedback with an invalid screenshot", async () => {
        await expect(
            submitFeedback.execute({
                type: "BUG",
                comment: "Bugou tudo",
                screenshot: "test.jpg",
            })
        ).rejects.toThrow();
    });
});
