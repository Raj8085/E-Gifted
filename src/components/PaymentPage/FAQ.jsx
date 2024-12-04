import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  


const FrequentAskedQuestions=()=>{
    return(
        <Accordion type="single" collapsible className="max-w-6xl ml-52">
        <AccordionItem value="item-1">
          <AccordionTrigger>What are Adidas eGift Cards?</AccordionTrigger>
          <AccordionContent>
          Adidas eGift Cards are a digital gift card preloaded with a specific monetary value. They can be purchased at eGifter.com and used to make purchases at and/or at Adidas stores.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I buy Adidas eGift for myself?</AccordionTrigger>
          <AccordionContent>
          Yes! Go to eGifter.com, select or search for Adidas eGift Card and click the “Add to Cart” button to purchase Adidas eGift Cards for yourself.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I send Adidas eGift cards to  someone else as gift</AccordionTrigger>
          <AccordionContent>
          Yes! Go to eGifter.com, select or search for Adidas eGift Card and click the “Send to a Friend” button to send personalized Adidas eGift Cards to someone special.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Where can Adidas eGift Cards be used?</AccordionTrigger>
          <AccordionContent>
          You can use your eGift Card to make purchases online at and/or at Adidas stores, if applicable. See Adidas terms for more information on how to use your eGift Card.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Are there any geographic restrictions on Adidas eGift Cards?</AccordionTrigger>
          <AccordionContent>
          Most brands only allow their eGift Cards to be used in the country where they originated. Adidas gift cards are Geographic restrictions apply. Review the Terms for details.. See Adidas terms for more information.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Where are my Adidas eGift Cards located?</AccordionTrigger>
          <AccordionContent>
          All your gift card purchases are stored in your eGifter Wallet where you can keep track of gift card balances, add notes and archive them once they are used.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Can I add my Adidas eGift Card to popular mobile wallets?</AccordionTrigger>
          <AccordionContent>
            Yes, eGifter makes it easy to add Adidas eGift Cards to Apple Wallet and Google Wallet.
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>

    )
}

export default FrequentAskedQuestions