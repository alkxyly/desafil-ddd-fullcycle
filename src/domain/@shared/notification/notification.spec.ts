import Notification from "./notification";

describe("Unit tests for notification", () => {
    it("should create errors", () =>{
        const notification = new Notification();
        const error = {
            message: "error message",
            context: "customer"
        }

        notification.addError(error);

        expect(notification.messages("customer")).toBe("customer: error message,");

        const error2 = {
            message: "error message2",
            context: "customer"
        }

        notification.addError(error2);

        expect(notification.messages("customer")).toBe("customer: error message,customer: error message2,");
    });
});