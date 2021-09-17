package ee.myrgeltpr.backend.controller;


import ee.myrgeltpr.backend.model.Item;
import ee.myrgeltpr.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItem(){
            return itemService.getItems();
    }

    @PostMapping("items")
    public String postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        return "Ese edukalt lisatud " + item.getName();
    }

}

