Object.defineProperty(window, "MySweetApp",
    {value: "v1.0.0", writable: true});

function deliveryMethod(): string {
    // TODO
    return "overnight";
}

function shipWeight(): number {
    const el: HTMLElement | null = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    return parseInt(el.innerHTML, 10);
}

function sendUpdates(emailAddr: string | string[]): void {
    function sendEmail(addr: string): void {
        // tslint:disable-next-line:no-console
        console.log(`Shipping to ${addr} via ${deliveryMethod() || "standard"} delivery`);

        if (shipWeight() > 100) {
            // tslint:disable-next-line:no-console
            console.log("WARNING: Oversize package");
        }
    }

    if (Array.isArray(emailAddr)) {
        // @ts-ignore
        emailAddr.forEach((val, idx) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}

const a = [1, 2, 3, 4].includes(1)
