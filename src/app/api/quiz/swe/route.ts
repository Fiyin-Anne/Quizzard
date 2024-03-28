import { NextResponse, NextRequest } from "next/server";
import { generateAiContent } from '../../../../lib/googleAi'

export async function GET(
    request: Request,
) {
    try {
        const { searchParams } = new URL(request.url)
        const category = searchParams.get("category");
        if (!category) throw new Error('Please select a category.');
        let response = await generateAiContent({ category});
        let topic = response?.[0];
        let questions = response?.slice(2);
        return NextResponse.json({ quiz_set: { topic, questions } }, { status: 200 });
    } catch (error: any|unknown) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
