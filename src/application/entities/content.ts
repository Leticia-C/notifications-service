export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length > 5 && content.length <= 240 ? true : false;
  }

  constructor(content: string) {
    const isValidateContentLength = this.validateContentLength(content);
    if (!isValidateContentLength) {
      throw new Error(
        'Content length must be value must be in between 5 and 240',
      );
    }
    this.content = content;
  }
}
