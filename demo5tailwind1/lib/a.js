
const Groq = require('groq-sdk');

const groq = new Groq({
    apiKey: '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'
    , dangerouslyAllowBrowser: true

});

async function main() {
  const stream = await groq.chat.completions.create({
    //
    // Required parameters
    //
    messages: [
      // Set an optional system message. This sets the behavior of the
      // assistant and can be used to provide specific instructions for
      // how it should behave throughout the conversation.
      {
        role: 'system',
        content: 'you are a helpful assistant.',
      },
      // Set a user message for the assistant to respond to.
      {
        role: 'user',
        content: '天空为什么是蓝色的，用简体中文回答，谢谢你，求你了',
      },
    ],

    // The language model which will generate the completion.
    model: 'mixtral-8x7b-32768',

    //
    // Optional parameters
    //

    // Controls randomness: lowering results in less random completions.
    // As the temperature approaches zero, the model will become deterministic
    // and repetitive.
    temperature: 0.5,

    // The maximum number of tokens to generate. Requests can use up to
    // 2048 tokens shared between prompt and completion.
    max_tokens: 1024,

    // Controls diversity via nucleus sampling: 0.5 means half of all
    // likelihood-weighted options are considered.
    top_p: 1,

    // A stop sequence is a predefined or user-specified text string that
    // signals an AI to stop generating content, ensuring its responses
    // remain focused and concise. Examples include punctuation marks and
    // markers like "[end]".
    stop: null,

    // If set, partial message deltas will be sent.
    stream: true,
  });

  return stream
//   for await (const chunk of stream) {
//     console.log(chunk.choices[0]?.delta?.content || '');
//   }
}

export default main;
