
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export function CardWithForm() {
//   return (
//     <Card className="w-[700px]">
//       <CardHeader >
//         <CardTitle>Please review your order</CardTitle>
//         <CardDescription>Deploy your new project in one-click.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="name">Enter your promo code</Label>
//               <Input id="name" placeholder="Name of your project" />
//             </div>
//             <div className="flex flex-col space-y-1.5">
            
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button variant="outline">APPLY PROMO CODE</Button>
//         <Button>PROCEED TO CHECKOUT</Button>
//       </CardFooter>
//     </Card>
//   )
// }



export function CardWithForm() {
    return (
        <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-[700px]  shadow-lg rounded-lg border bg-white ">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Please review your order</CardTitle>
            <CardDescription className="text-gray-600">
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>

            <div className="flex flex-col items-center space-y-4 w-[500px] ml-20">
  <div className="flex flex-col space-y-2 text-center w-3/4">
    <Label htmlFor="promo-code" className="text-lg font-medium text-gray-700">
      Enter your promo code
    </Label>
    <Input
      id="promo-code"
      placeholder="Enter your promo code"
      className="border border-gray-300 rounded-lg p-2 w-full"
    />
  </div>
</div>

              {/* <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-2 ">
                  <Label htmlFor="promo-code" className="text-lg font-medium">
                    Enter your promo code
                  </Label>
                  <Input
                    id="promo-code"
                    placeholder="Enter your promo code"
                    className="border border-gray-300 rounded-lg"
                  />
                </div>
              </div> */}
            </form>
          </CardContent>
          <CardFooter className="flex justify-between px-4 py-2">
            <Button variant="outline" className="px-4 py-2">
              APPLY PROMO CODE
            </Button>
            <Button className="px-4 py-2">PROCEED TO CHECKOUT</Button>
          </CardFooter>
        </Card>
      </div>
    </>
    );
  }











  
