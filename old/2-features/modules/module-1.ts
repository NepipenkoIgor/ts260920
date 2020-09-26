function sleep(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<any> {
    for (const item of items) {
        await sleep(500);
        yield item;
    }
}

export default async function speakRealSloth(items: string[]): Promise<void> {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}

