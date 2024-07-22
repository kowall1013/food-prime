import * as Table from "@/app/_shared/table";

export default function Dashboard() {
  return (
    <div>
      <h1>Table</h1>
      <Table.Table>
        <Table.TableHead>
          <Table.TableRow>
            <Table.TableCell>Product</Table.TableCell>
            <Table.TableCell>Weight</Table.TableCell>
            <Table.TableCell>Kcal</Table.TableCell>
            <Table.TableCell>Protein</Table.TableCell>
            <Table.TableCell>Fat</Table.TableCell>
            <Table.TableCell>carbohydrates</Table.TableCell>
          </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
          <Table.TableRow>
            <Table.TableData>Banana</Table.TableData>
            <Table.TableData>100g</Table.TableData>
            <Table.TableData>365 kcal</Table.TableData>
            <Table.TableData>4.5g</Table.TableData>
            <Table.TableData>2.3g</Table.TableData>
            <Table.TableData>82g</Table.TableData>
          </Table.TableRow>
          <Table.TableRow>
            <Table.TableData>Chicken</Table.TableData>
            <Table.TableData>100g</Table.TableData>
            <Table.TableData>365 kcal</Table.TableData>
            <Table.TableData>14.5g</Table.TableData>
            <Table.TableData>6.3g</Table.TableData>
            <Table.TableData>22g</Table.TableData>
          </Table.TableRow>
        </Table.TableBody>
      </Table.Table>
    </div>
  );
}
