package main

import (
	"fmt"
	"strings"

	"github.com/go-pg/migrations/v8"
)

type ProductData struct {
	Name      string
	ProductId string
	Images    []string
	BrandId   int
	Link      string
}

type BrandData struct {
	Name string
	Logo string
}

var brandMockData = []BrandData{
	{
		Name: "Adidas",
		Logo: `https://w7.pngwing.com/pngs/488/478/png-transparent-adidas-originals-t-shirt-logo-brand-adidas-angle-text-retail.png`,
	},
	{
		Name: "Gucci",
		Logo: `https://italynews.online/wp-content/uploads/2022/03/Gucci-logo-e1648317774513.jpg`,
	},
}

var productMockData = []ProductData{
	{
		Name:      "SAMBA OG SHOES",
		ProductId: "ADIDAS-SAMBA-OG-SHOES",
		Images:    []string{`https://brand.assets.adidas.com/image/upload/f_auto\,q_auto\,fl_lossy/enUS/Images/mens-shoes-v2-tcc_tcm221-909628.png`},
		BrandId:   1,
		Link:      `https://www.adidas.com/us/nmd_r1-shoes/GW5680.html`,
	},
	{
		Name:      "Beige Shoes",
		ProductId: "ADIDAS-Beige-Shoes",
		Images:    []string{`https://assets.adidas.com/images/w_383\,h_383\,f_auto\,q_auto\,fl_lossy\,c_fill\,g_auto/773b1e3177d04d96968cadf8006f0d9f_9366/nmd_r1-shoes.jpg`},
		BrandId:   1,
		Link:      `https://www.adidas.com/us/nmd_r1-shoes/GW5680.html`,
	},
	{
		Name:      "Style 546551 9Y920 9666",
		ProductId: "GUCCI-Style-546551-9Y920-9666",
		Images:    []string{`https://media.gucci.com/style/White_Center_0_0_500x340/1540224904/546551_9Y920_9666_001_100_0000_Light-Mens-Screener-GG-sneaker.jpg`},
		BrandId:   2,
		Link:      `https://www.gucci.com/ca/en/pr/men/shoes-for-men/sneakers-for-men/low-top-sneakers-for-men/mens-screener-gg-sneaker-p-5465519Y9209666?utm_medium=organic&utm_source=google&utm_campaign=free_pla&utm_content=pla&utm_term=5465519Y9209666_10.5%20US&gclid=Cj0KCQjwjIKYBhC6ARIsAGEds-I6roi6SNK2r8hM-YZmSIHpeEwycO59jdDInfLog3ZseW2EKWGyDAAaAoegEALw_wcB&gclsrc=aw.ds`,
	},
	{
		Name:      "EDGE LUX SHOES",
		ProductId: "ADIDAS-EDGE-LUX-SHOES",
		Images:    []string{`https://assets.adidas.com/images/w_600\,f_auto\,q_auto/25c48240523645c09b05ad6700bb06c1_9366/Edge_Lux_Shoes_Pink_GX0592.jpg`},
		BrandId:   1,
		Link:      `https://www.adidas.com/us/edge-lux-shoes/GX0592.html`,
	},
}

func init() {
	migrations.MustRegisterTx(func(db migrations.DB) error {
		fmt.Println("seeding brands...")
		var err error
		for _, brand := range brandMockData {
			_, err = db.Exec(fmt.Sprintf(`INSERT INTO brands (name, logo) VALUES ('%s', '%s');`, brand.Name, brand.Logo))

			if err != nil {
				fmt.Println("Error creating brand", err, brand)
				panic(err)
			}
		}

		fmt.Println("seeding products...")

		for _, product := range productMockData {
			_, err = db.Exec(fmt.Sprintf(`INSERT INTO products (name, product_id, brand_id, link, images) VALUES ('%s', '%s', %d, '%s', '{%s}');`, product.Name, product.ProductId, product.BrandId, product.Link, strings.Join(product.Images, ", ")))
			if err != nil {
				fmt.Println("Error creating product", err, product)
				panic(err)
			}
		}

		return err
	}, func(db migrations.DB) error {
		fmt.Println("truncating...")
		_, err := db.Exec(`TRUNCATE products`)
		_, err = db.Exec(`TRUNCATE brands`)
		return err
	})
}
