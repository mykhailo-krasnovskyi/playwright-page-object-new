FROM mcr.microsoft.com/playwright

WORKDIR /playwright-tests

COPY . .

RUN npm install

CMD ["npx", "playwright", "test", "fuelExpenses.spec.ts", "--project=ui-tests"]
